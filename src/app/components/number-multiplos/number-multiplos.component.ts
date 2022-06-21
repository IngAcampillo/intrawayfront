import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RespuestaServicio } from 'src/app/core/service/respuestaServicio';
import { Datos } from '../../core/model/datos';
import { MultiplosService } from '../../core/service/multiplos.service';
import { Multiplo } from '../../core/model/multiplo';
import { SwalUtils } from 'src/app/utils/swalUtils';

@Component({
  selector: 'app-number-multiplos',
  templateUrl: './number-multiplos.component.html',
  styleUrls: ['./number-multiplos.component.css']
})
export class NumberMultiplosComponent implements OnInit {
  form: FormGroup;
  isForm: Promise<any>;
  resultado: Multiplo;

  constructor(
    private formBuilder: FormBuilder,
    private multiplosService: MultiplosService
  ) {}

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  iniciarFormulario(): void {
    this.isForm = Promise.resolve(
      this.form = this.formBuilder.group({
        minimo: new FormControl(null,  [Validators.required]),
        maximo: new FormControl(null,  [Validators.required]),
      }));
  }
  generarMultiplos(){
    this.resultado=null;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      SwalUtils.showAlert('Información general','Por favor completar los campos requeridos','error');
      return;
    }  
    const valores = this.form.value;
    let datos: Datos ={
      minimo: valores.minimo,
      maximo: valores.maximo,
      
    };
    debugger;
    this.multiplosService.insertar(datos).subscribe((resp: RespuestaServicio) => {
      if(resp.ok){
        this.resultado= resp.body as Multiplo;
      }
    }, () => {
      SwalUtils.showAlert("Información general","Se ha presentado un inconviente por favor intentar nuevamente.",'error');
    });

    
  }
  
}