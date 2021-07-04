package com.hieunh.note.controller;

import com.hieunh.note.model.dto.NoteDto;
import com.hieunh.note.model.form.NoteForm;
import com.hieunh.note.service.NoteService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@AllArgsConstructor
@NoArgsConstructor
public class NoteController {

    @Autowired
    private NoteService noteService;

    @GetMapping("/notes")
    public List<NoteDto> getAll() {
        return noteService.getAll();
    }

    @GetMapping("/notes/{id}")
    public NoteDto getById(@PathVariable(name = "id") Long id) {
        return noteService.getById(id);
    }

    @PostMapping("/notes")
    public NoteDto create(@RequestBody NoteForm noteForm) {
        return noteService.insert(noteForm);
    }

    @PutMapping("/notes/{id}")
    public NoteDto update(@PathVariable(name = "id") Long id, @RequestBody NoteForm noteForm) {
        return noteService.update(id, noteForm);
    }

    @DeleteMapping("/notes/{id}")
    public NoteDto delete(@PathVariable(name ="id") Long id) {
        return noteService.deleteById(id);
    }
}
