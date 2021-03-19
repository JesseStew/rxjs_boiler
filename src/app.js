import $ from 'jquery';
import Rx from 'rxjs/Rx';

const btn = $('#btn')

const btnStream$ = Rx.Observable.fromEvent(btn, 'click')

btnStream$.subscribe(
  function(e){
    console.log(e)
  },
  function(err){
    console.log(err)
  },
  function(err){
    console.log('Completed')
  }
)

const inputStream$ = Rx.Observable.fromEvent(input, 'keyup')

inputStream$.subscribe(
  function(e){
    console.log(e.currentTarget.value)
  },
  function(err){
    console.log(err)
  },
  function(err){
    console.log('Completed')
  }
)