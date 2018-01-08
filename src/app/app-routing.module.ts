import { NgModule, Component, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { JsonpModule, Response} from '@angular/http';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import { GoodsBoardComponent } from './goods-board/goods-board.component';
const routes: Routes=[
  {path: 'goods-board', component: GoodsBoardComponent }
];


@NgModule({
  imports: [
    BrowserModule, JsonpModule,
    ReactiveFormsModule, FormsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  declarations: [
    GoodsBoardComponent
  ]
})
export class AppRoutingModule { }
