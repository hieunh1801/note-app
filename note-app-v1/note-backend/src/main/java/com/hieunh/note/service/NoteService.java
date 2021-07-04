package com.hieunh.note.service;

import com.hieunh.note.model.dto.NoteDto;
import com.hieunh.note.model.form.NoteForm;

import java.util.List;

public interface NoteService {
    List<NoteDto> getAll();

    NoteDto getById(Long id);

    NoteDto insert(NoteForm noteForm);

    NoteDto update(Long id, NoteForm noteForm);

    NoteDto deleteById(Long id);
}
