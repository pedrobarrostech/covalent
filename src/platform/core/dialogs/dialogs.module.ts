import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdDialogModule, MdInputModule, MdButtonModule } from '@angular/material';

import { TdDialogComponent, TdDialogTitleDirective,
         TdDialogActionsDirective, TdDialogContentDirective } from './dialog.component';
import { TdAlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { TdConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { TdPromptDialogComponent } from './prompt-dialog/prompt-dialog.component';
import { TdDialogService } from './services/dialog.service';

const TD_DIALOGS: Type<any>[] = [
  TdAlertDialogComponent,
  TdConfirmDialogComponent,
  TdPromptDialogComponent,
  TdDialogComponent,
  TdDialogTitleDirective,
  TdDialogActionsDirective,
  TdDialogContentDirective,
];

const TD_DIALOGS_ENTRY_COMPONENTS: Type<any>[] = [
  TdAlertDialogComponent,
  TdConfirmDialogComponent,
  TdPromptDialogComponent,
];

export { IAlertConfig, IConfirmConfig, IPromptConfig } from './services/dialog.service';
export { TdDialogService, TdDialogComponent, TdDialogTitleDirective,
         TdAlertDialogComponent, TdConfirmDialogComponent, TdPromptDialogComponent };

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MdDialogModule,
    MdInputModule,
    MdButtonModule,
  ],
  declarations: [
    TD_DIALOGS,
  ],
  exports: [
    TD_DIALOGS,
  ],
  providers: [
    TdDialogService,
  ],
  entryComponents: [
    TD_DIALOGS_ENTRY_COMPONENTS,
  ],
})
export class CovalentDialogsModule {
  /**
   * @deprecated in 1.0.0-beta.3
   *
   * Please use without calling forRoot()
   */
  static forRoot(): ModuleWithProviders {
    /* tslint:disable-next-line */
    console.warn('forRoot() has been deprecated in CovalentDialogsModule');
    return {
      ngModule: CovalentDialogsModule,
      providers: [ ],
    };
  }
}
