import { Component, OnInit, DoCheck, AfterContentChecked, AfterViewInit, AfterContentInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit, DoCheck, AfterContentChecked, AfterViewInit, AfterContentInit, AfterViewChecked, OnDestroy {

	quantidade: number = 0

  constructor() { }


	adicionar() {
		this.quantidade += 1
	}

	decrementar() {
		this.quantidade -= 1
	}

	//checked -> content -> view

	// apos alguma alteração, verifica a view
	ngAfterViewChecked(): void {
		console.log("ngAfterViewChecked")
	}

	// quando o primeiro conteudo for iniciado
	ngAfterContentInit(): void {
		console.log("ngAfterContentInit")
	}

	// depois da inicialização da view
	ngAfterViewInit(): void {
		console.log("ngAfterViewInit")
	}

	// apos alguma alteração, verifica o conteudo
	ngAfterContentChecked(): void {
		console.log("ngAfterContentChecked")
	}


	ngDoCheck(): void {
		console.log("ngDoCheck")
	}

  ngOnInit(): void {
		console.log("ngOnInit")
  }

	ngOnDestroy(): void {
		console.log("goodbye my friend")
	}
}
