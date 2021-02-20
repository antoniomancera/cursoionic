import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GreedPageRoutingModule } from './greed-routing.module';

import { GreedPage } from './greed.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GreedPageRoutingModule,
    ComponentsModule
  ],
  declarations: [GreedPage]
})
export class GreedPageModule {}
