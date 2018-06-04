import { Injectable } from "@angular/core";
import {CrudService} from "./crud.service";
import {FormSubmitterService} from "./form-submitter.service";

@Injectable()
export class InstantorReportService {
  constructor(
    private _crud: CrudService,
    private _formSubmitter: FormSubmitterService,
    private businessKey,
    private state
  ) {
    this.businessKey = businessKey;
    this.state = state;
  }

  private statusTimeout;

  public checkReportStatus() {
    this._crud.getNextTaskIdByProcessId(this.state.params.processId).then(result => {
      this._crud.getProcessVariables(this.state.params.processId, result.data.taskId, 'instantorReportLoginSuccess').subscribe(res => {
        if (res.data.variables['instantorReportLoginSuccess']) {
          var json = {formgastep: {value: 'step11', type: "String"}};
          this._formSubmitter.sendData(this.state, json);
        } else {
          this.nextLoad();
        }
      }).catch(() => this.nextLoad() );
    });
  };

  public cancelNextLoad() {
    $timeout.cancel(this.statusTimeout);
  };

  public nextLoad() {
    this.cancelNextLoad();
    this.statusTimeout = $timeout(_self.checkReportStatus, 3000);
  }

}
