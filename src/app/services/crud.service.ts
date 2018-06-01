import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class CrudService {
  constructor(
    private _http: HttpClient
  ) { }

  public startProcess(argument) {
    return this._http.get('/engine-rest/process-definition/key/startProcess');
  };

  public getNextTaskIdByProcessId(processId) {
    let version = Date.now();
    const params = new HttpParams();
    params.set("processInstanceId", processId);
    params.set("v", String(version));
    return this._http.get("/rest/camunda/task", { params });
  };

  public getProcessBasicInfo(urlParams) {
    let version = Date.now();
    const params = new HttpParams();
    params.set("v", String(version));
    const url = '/engine-rest/process-instance/' + urlParams.processId + '/';
    return this._http.get(url, { params });
  };

  public getFormVariablesByTaskId(processId, taskId, variables) {
    let version = Date.now();
    const params = new HttpParams();
    params.set("deserializeValues", "false");
    params.set("variableNames", variables);
    params.set("v", String(version));
    if (processId) {
      return this._http.get("/engine-rest/engine/default/task/" + taskId + "/form-variables", { params });
    }
  };

  // this.getProcessVariablesFlow = function(taskId,variables){
  //     return rx.Observable
  //         .fromPromise(service.getProcessVariables(taskId,variables))
  //         .map((response) => response.data);зфнвфн
  // };

  public getFormVariablesByTaskIdDesirialize(processId, taskId, variables) {
    let version = Date.now();
    const params = new HttpParams();
    params.set("deserializeValues", "false");
    params.set("variableNames", variables);
    params.set("v", String(version));
    if (processId) {
      return this._http.get("/engine-rest/engine/default/task/" + taskId + "/form-variables", { params });
    }
  };

  public getLegalsNumber(processId,productType,isAutoprolongate) {
    let version = Date.now();
    const params = new HttpParams();
    params.set("processInstanceId", processId);
    params.set("productType", productType);
    params.set("isAutoProlongation", isAutoprolongate);
    params.set("v", String(version));
    return this._http.get("/rest/agreements/legalsNumber", { params });
  };

  public startCamundaProcessByRest(json) {
    return this._http.post('/rest/camunda/startProcess', { json });
  };

  public getProcessVariables(processId, taskId, variables) {
    const json = {
      processInstanceId: processId,
      taskId: taskId,
      variables: { items: [variables.split(",")][0] }
    };
    const url = "/rest/camunda/variables";
    return this._http.post(url, { json });
  };

  public putProcessVariables(processId, businessKey, variables) {
    const url = "/rest/camunda/variables";
    const json = {
      processInstanceId: processId,
      businessKey: businessKey,
      variables: variables
    };
    return this._http.put(url, { json });
  };

  public submitFormByTaskId(taskId, json) {
    const url = "/engine-rest/engine/default/task/"+taskId+"/submit-form";
    return this._http.post(url, { json });
  };

  public checkIfTaskExist(processId) {
    return this.getNextTaskIdByProcessId(processId).map(res => {
      if (res.status !== 500) {
        return res.data[0];
      } else {
        return Promise.reject(new Error('No task was found for process: '+processId));
      }
    });
  };

  public tryGetTask(processId, countOfRequests){
    console.log('try get taskId recursively...');
    let timeout = false;
    // setTimeout(() => { timeout = true }, timeoutInSeconds * 1000);
    if (countOfRequests <= 0) timeout = true;
    if (!timeout) {
      return this.checkIfTaskExist(processId).map(stateData => {
        if (stateData) {
          console.log('Got taskId.');
          return stateData;
        } else {
          return this.tryGetTask(processId, countOfRequests > 0 ?  countOfRequests - 1 : 0);
        }
      }, err => { return this.tryGetTask(processId, countOfRequests > 0 ?  countOfRequests - 1 : 0) });
    } else {
      return Promise.reject('try get taskId: timeout.');
    }
  };

}
