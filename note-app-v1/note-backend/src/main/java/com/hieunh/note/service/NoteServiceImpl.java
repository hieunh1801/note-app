package com.hieunh.note.service;

import com.hieunh.note.model.dto.NoteDto;
import com.hieunh.note.model.entity.Note;
import com.hieunh.note.model.form.NoteForm;
import com.hieunh.note.repository.NoteRepository;
import lombok.Data;
import org.hibernate.criterion.Order;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Data
public class NoteServiceImpl implements NoteService {

    @Autowired
    NoteRepository noteRepository;

    @Autowired
    ModelMapper modelMapper;

    private NoteDto convertNoteToNoteDto(Note note) {
        return modelMapper.map(note, NoteDto.class);
    }

    private List<NoteDto> convertNotesToNoteDtos(List<Note> notes) {
        List<NoteDto> noteDtos = new ArrayList<>();
        notes.forEach(note -> {
            noteDtos.add(modelMapper.map(note, NoteDto.class));
        });

        return noteDtos;
    }

    @Override
    public List<NoteDto> getAll() {
        List<Note> notes = noteRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
        return this.convertNotesToNoteDtos(notes);
    }

    @Override
    public NoteDto getById(Long id) {
        Note note = noteRepository.getById(id);
        return modelMapper.map(note, NoteDto.class);
    }

    @Override
    public NoteDto insert(NoteForm noteForm) {
        Note note = Note.builder()
                .title(noteForm.getTitle())
                .content(noteForm.getContent())
                .build();
        Note createdNote = noteRepository.save(note);
        return this.convertNoteToNoteDto(createdNote);
    }

    @Override
    public NoteDto update(Long id, NoteForm noteForm) {
        Note note = noteRepository.getById(id);
        note.setTitle(noteForm.getTitle());
        note.setContent(noteForm.getContent());
        Note updatedNote = noteRepository.save(note);
        return this.convertNoteToNoteDto(updatedNote);
    }

    @Override
    public NoteDto deleteById(Long id) {
        Note note = noteRepository.getById(id);
        noteRepository.deleteById(note.getId());
        return this.convertNoteToNoteDto(note);
    }
}
