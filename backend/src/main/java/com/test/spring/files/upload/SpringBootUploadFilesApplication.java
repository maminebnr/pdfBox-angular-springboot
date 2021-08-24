package com.test.spring.files.upload;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.test.spring.files.upload.service.FilesStorageService;

@SpringBootApplication
public class SpringBootUploadFilesApplication implements CommandLineRunner {
  @Resource
  FilesStorageService storageService;

  public static void main(String[] args) {
    SpringApplication.run(SpringBootUploadFilesApplication.class, args);
  }

@Override
public void run(String... args) throws Exception {
	// TODO Auto-generated method stub
	
}

  /*@Override
  public void run(String... arg) throws Exception {
    storageService.deleteAll();
    storageService.init();
  }*/
}
