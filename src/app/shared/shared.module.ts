import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagemComponent } from './imagem/imagem.component';
import { NzImageModule } from 'ng-zorro-antd/image';

@NgModule({
  declarations: [ImagemComponent],
  imports: [CommonModule, NzImageModule],
  exports: [ImagemComponent],
})
export class SharedModule {}
