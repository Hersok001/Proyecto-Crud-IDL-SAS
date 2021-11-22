package com.crud.crud.controller;


import com.crud.crud.dto.CiudadDto;
import com.crud.crud.dto.Mensaje;
import com.crud.crud.entity.Ciudad;
import com.crud.crud.service.CiudadService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/ciudad")
@CrossOrigin(origins = "*")
public class CiudadController {

    @Autowired
    CiudadService ciudadService;

    @GetMapping("/lista")
    public ResponseEntity <List<Ciudad>> list(){
        List<Ciudad> list= ciudadService.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity <Ciudad> getById (@PathVariable("id") int id){
        if(!ciudadService.existsById(id))
            return new ResponseEntity(new Mensaje("No existe"), HttpStatus.NOT_FOUND);
        Ciudad ciudad = ciudadService.getOne(id).get();
        return new ResponseEntity(ciudad, HttpStatus.OK);
    }

    @GetMapping("/detailname/{nombre}")
    public ResponseEntity <Ciudad> getByNombre (@PathVariable("nombre") String nombre){
        if(!ciudadService.existsByNombre(nombre))
            return new ResponseEntity(new Mensaje("No existe"), HttpStatus.NOT_FOUND);
        Ciudad ciudad = ciudadService.getByNombre(nombre).get();
        return new ResponseEntity(ciudad, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity <?> create (@RequestBody CiudadDto ciudadDto){
        if (StringUtils.isBlank(ciudadDto.getNombre()))
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        if (StringUtils.isBlank(ciudadDto.getDepartamento()))
            return new ResponseEntity(new Mensaje("El departamento es obligatorio"), HttpStatus.BAD_REQUEST);

        if(ciudadService.existsByNombre(ciudadDto.getNombre()))
            return new ResponseEntity(new Mensaje("Ese nombre ya existe"), HttpStatus.BAD_REQUEST);

        Ciudad ciudad = new Ciudad(ciudadDto.getNombre(),ciudadDto.getDepartamento() );
        ciudadService.save(ciudad);

        return new ResponseEntity(new Mensaje("Ciudad creada"), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity <?> update(@PathVariable("id")int id, @RequestBody CiudadDto ciudadDto){

        if (!ciudadService.existsById(id))
            return new ResponseEntity(new Mensaje("No existe"), HttpStatus.NOT_FOUND);

        if(ciudadService.existsByNombre(ciudadDto.getNombre()) && ciudadService.getByNombre(ciudadDto.getNombre()).get().getId() != id)
            return new ResponseEntity(new Mensaje("Ese nombre ya existe"), HttpStatus.BAD_REQUEST);

        if (StringUtils.isBlank(ciudadDto.getNombre()))
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        if (StringUtils.isBlank(ciudadDto.getDepartamento()))
            return new ResponseEntity(new Mensaje("El departamento es obligatorio"), HttpStatus.BAD_REQUEST);

        Ciudad ciudad = ciudadService.getOne(id).get();
        ciudad.setNombre(ciudadDto.getNombre());
        ciudad.setDepartamento(ciudadDto.getDepartamento());
        ciudadService.save(ciudad);
        return new ResponseEntity(new Mensaje("Ciudad actualizada"), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id")int id){
        if (!ciudadService.existsById(id))
            return new ResponseEntity(new Mensaje("No existe"), HttpStatus.NOT_FOUND);
        ciudadService.delete(id);
        return new ResponseEntity(new Mensaje("Ciudad eliminada"), HttpStatus.OK);

    }
}
