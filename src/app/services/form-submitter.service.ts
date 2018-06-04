import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CrudService} from "./crud.service";
import {GtmService} from "./gtm.service";

@Injectable()
export class FormSubmitterService {
  constructor(
    private _http: HttpClient,
    private _crud: CrudService,
    private _gtm: GtmService
  ) {}

  public setNextState(currentState) {
    return this._crud.getNextTaskIdByProcessId(currentState.params.processId)
      .map(function (nextState) {
        if (nextState.status !== 500) {
          var nextStateData = nextState.data;
          // if (nextStateData) {
          //   $state.go(nextStateData['formKey'], {
          //     processId: currentState.params.processId,
          //     taskId: nextStateData.taskId
          //   });
          // } else {
          //   console.log("setNextState");
          //   $state.go('start.firstTask');
          // }
        } else {
          console.warn('form submitter service failed to get next state');
        }
      });
  };

  public sendData(currentState, jsonVariables) {
    return this._crud.submitFormByTaskId(currentState.params.taskId, jsonVariables)
      .map(() => this.setNextState(currentState));
  };

  public submitCamundaForm($scope, $state, form, variables) {
    $scope.submitted = false;
    // smoothScroll(document.getElementById("main"));
    if (form.$valid) {
      $scope.isSending = true;
      if ($state.params.processId) {
        this._crud.getNextTaskIdByProcessId($state.params.processId)
          .map(stateData => {
            this._crud.submitFormByTaskId(stateData.data.taskId, variables)
              .map(() => {
                this.setNextState($state);
              }, (error) => {
                throw Error(error.data.message);
              });
          }, (error) => {
            console.log('submitCamundaForm');
            $state.go('start.firstTask');
          });
      } else {
        throw Error('no processId was supplied.');
      }
    } else {
      $scope.submitted = true;
    }
  };

  public submitStartProcessForm(json) {
    // smoothScroll(document.getElementById("main"));
    this._gtm.sendData({
      'event': 'startSubmitForm',
      'screen': 'Camunda',
      'data': json
    });
    let processId = '';
    this._crud.startCamundaProcessByRest(json)
      .map((res) => {
        this._gtm.sendData({
          'event': 'getProcessId',
          'screen': 'Camunda',
          'processId': res.data.processInstanceId
        });
        processId = res.data.processInstanceId;
        return this._crud.getNextTaskIdByProcessId(processId);
      }).subscribe((res) => {
      if (res){
        this._gtm.sendData({
          'event': 'submitCamundaFormByIds',
          'screen': 'Camunda',
          'formKey': res,
          'taskId': res
        });
        // $state.go(res.data.formKey, {
        //     processId: processId,
        //     taskId: res.data.taskId
        //   }
        // )
      }
      // $rootScope.updateNextProcessTask();
    });
  };

}
