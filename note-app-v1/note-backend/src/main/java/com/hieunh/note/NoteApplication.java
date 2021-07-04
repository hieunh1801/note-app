package com.hieunh.note;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
public class NoteApplication {

	public static void main(String[] args) {
		SpringApplication.run(NoteApplication.class, args);
	}

}
