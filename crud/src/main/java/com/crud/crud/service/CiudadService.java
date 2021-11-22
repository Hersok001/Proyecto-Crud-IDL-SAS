package com.crud.crud.service;


import com.crud.crud.entity.Ciudad;
import com.crud.crud.repository.CiudadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CiudadService {

    @Autowired
    CiudadRepository ciudadRepository;

    public List<Ciudad> list(){
        return ciudadRepository.findAll();
    }

    public Optional<Ciudad> getOne (int id){
        return ciudadRepository.findById(id);
    }

    public Optional <Ciudad> getByNombre (String nombre){
        return ciudadRepository.findByNombre(nombre);
    }

    public void save(Ciudad ciudad){
        ciudadRepository.save(ciudad);
    }

    public void delete(int id){
        ciudadRepository.deleteById(id);
    }

    public boolean existsById(int id){
        return ciudadRepository.existsById(id);
    }

    public boolean existsByNombre(String nombre){

        return ciudadRepository.existsByNombre(nombre);
    }


}
