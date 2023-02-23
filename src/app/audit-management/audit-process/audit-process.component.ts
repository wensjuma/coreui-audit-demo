import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { start } from 'repl';
import { StartAuditComponent } from '../start-audit/start-audit.component';
import { auditDetails } from '../audit-details.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-audit-process',
  templateUrl: './audit-process.component.html',
  styleUrls: ['./audit-process.component.scss']
})
export class AuditProcessComponent {
  companiesDetails = auditDetails
  constructor(
    
    private router: Router
  ){

  }
  viewAudit(auditItem:any){
    localStorage.setItem('auditDetails', JSON.stringify(auditItem))
    this.router.navigate(['/auditing/view/', auditItem.id])
  }
}
