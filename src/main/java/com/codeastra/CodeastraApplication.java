package com.codeastra;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.scheduling.annotation.EnableScheduling;

import lombok.extern.log4j.Log4j2;

/**
 * @author Pratik Kayte
 * @since 06 JUN 25
 */
@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
@Log4j2
@EnableScheduling
public class CodeastraApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		log.info("::::::::::::::::::::::Codeastra Application Started::::::::::::::::::::::");

		SpringApplication.run(CodeastraApplication.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(CodeastraApplication.class);
	}
}
