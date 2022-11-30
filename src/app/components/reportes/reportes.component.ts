import { Component } from '@angular/core';
import {ReporteServiceService} from '../../services/reporte-service.service'
import { ReporteCobranzas, Data } from '../../models/reporte-cobranzas'
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent {
    reportes: ReporteCobranzas | null = null;
    dataReportes: Data[] | null = null;
    fechaSolicitudReportes: string | null = null;
    fechaSolicitudSinFormato!: string;

    //De acuerdo a estas banderas se muestran o no ciertos mensajes
    primeraBusquedaRealizada: boolean = false;
    ExistenRegistrosBusqueda: boolean = false;
    fechaCargadaMenorALaActual: boolean = false;

    constructor(private reporteService: ReporteServiceService, public datepipe: DatePipe){}

    formatearFecha(){
      //La fecha devuelta por el input es del tipo "yyyy-MM-dd" y para la api es necesario "dd-MM-yyyy"
      this.fechaSolicitudReportes = this.datepipe.transform(this.fechaSolicitudSinFormato, 'dd-MM-yyyy');
    }

    // Determina si la fecha cargada es menor a la fecha del dia de hoy. Establacera true si es correcta la fecha cargada, false si es del dia actual o superior
    compararFecha(){

     // Se compara con la fecha de ayer ya que el metodo Date() tranforma la fecha cargada al día anterior (se debe a un tema de la hora, tomando como que si la hora 00:00:00 en Argentina son tres horas menos)

      var fechaDeAyer = new Date();
      fechaDeAyer.setDate(fechaDeAyer.getDate() - 1);
      let fechaCargada = new Date(this.fechaSolicitudSinFormato);
      this.fechaCargadaMenorALaActual = fechaCargada <= fechaDeAyer? true: false;

    }

    getReportes(){

      this.formatearFecha();
      this.compararFecha();

      if(this.fechaSolicitudReportes != null && this.fechaCargadaMenorALaActual){

        this.reporteService.get(this.fechaSolicitudReportes).subscribe(
          (respuesta: ReporteCobranzas ) =>
          {
            this.reportes = respuesta;
            this.dataReportes = this.reportes.data;
            // Segun estas banderas mostrare el mensaje de que no existen registros en la fecha ingresada. La bandera de primera busqueda permite ocultar la lista con datos fijos que en toda consulta habra, pero para evitar que este vacía la lista antes de realziar una primera busqueda se oculta.
            this.primeraBusquedaRealizada = true;
            this.ExistenRegistrosBusqueda = this.dataReportes?.length == 0? false: true;
          });

      }
      else{
        window.alert("La fecha no debe ser nula y ser anterior al día de hoy")
      }

    }


}
