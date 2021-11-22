package com.crud.crud.dto;


import javax.validation.constraints.NotBlank;

public class CiudadDto {

    @NotBlank
    private String nombre;
    @NotBlank
    private String departamento;

    public CiudadDto(){

    }

    public CiudadDto(@NotBlank String nombre, @NotBlank String departamento){

        this.nombre=nombre;
        this.departamento=departamento;
    }

    public String getDepartamento() {
        return departamento;
    }

    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
