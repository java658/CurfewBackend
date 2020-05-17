package com.cts.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cts.model.User;

	
	public interface UserRepo extends JpaRepository<User, Integer>  {

		public Optional<User> findByUserNameAndPassword(String userName, String password);



	}

