import { Component } from '@angular/core';
import { auditParamsData } from '../../audit-management/audit-details.data';

@Component({
  selector: 'app-audit-parameters',
  templateUrl: './audit-parameters.component.html',
  styleUrls: ['./audit-parameters.component.scss'],
})
export class AuditParametersComponent {
  myDetails = auditParamsData;
  constructor(){}
}
