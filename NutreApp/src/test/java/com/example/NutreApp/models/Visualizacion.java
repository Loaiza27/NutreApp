package com.example.NutreApp.models;

public class Visualizacion {
    private UUID id;
    private LocalDate fecha_visualizacion;
    private Boolean compleatado;
    public Visualizacion() {
    }
    public UUID getId() {
        return id;
    }
    public void setId(UUID id) {
        this.id = id;
    }
    public LocalDate getFecha_visualizacion() {
        return fecha_visualizacion;
    }
    public void setFecha_visualizacion(LocalDate fecha_visualizacion) {
        this.fecha_visualizacion = fecha_visualizacion;
    }
    public Boolean getCompleatado() {
        return compleatado;
    }
    public void setCompleatado(Boolean compleatado) {
        this.compleatado = compleatado;
    }
    public Visualizacion(UUID id, LocalDate fecha_visualizacion, Boolean compleatado) {
        this.id = id;
        this.fecha_visualizacion = fecha_visualizacion;
        this.compleatado = compleatado;
    }
    

}
