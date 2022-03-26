import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicialComponent } from './tela-inicial.component';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [TelaInicialComponent],
  imports: [CommonModule, SharedModule, NzGridModule],
})
export class TelaInicialModule {}
