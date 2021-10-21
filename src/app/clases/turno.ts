export class Turno {
    nombrePaciente!: string;
    apellidoPaciente!: string;

    nombreEspecialista!: string;
    apellidoEspecialista!: string;

    tipo!: string;
    edad!: number;
    DNI!: number;
    obraSocial!: string;
    especialidad!: string;

    dia!: string;
    fecha!: Date;
    horario!: number;

    estadoTurno!: string; // creado - aceptado - realizado - rechazado -

    reseña!: string;

    comentarioRechazo!: string;
}