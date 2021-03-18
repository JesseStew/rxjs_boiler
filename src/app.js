import $ from 'jquery';
import Rx from 'rxjs/Rx';

const btn = $('#btn')

const btnStream$ = Rx.Observable.fromEvent(btn, 'click')

btnStream$.subscribe(
  function(e){
    console.log('Clicked')
  },
  function(err){
    console.log(err)
  },
  function(err){
    console.log('Completed')
  }
)