package com.cts.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cts.model.User;
import com.cts.repo.UserRepo;
import com.cts.service.UserService;


@Service
public class UserServiceImpl implements UserService{
	
	Logger logger=LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	UserRepo registerRepo;

	@Override
	public User insert(User user) {
		user.setUser("ROLE_USER");
		registerRepo.save(user);
		return user;
	}

	@Override
	public List<User> getAllUsers() {
		List<User> entities = registerRepo.findAll();
		List<User> usersDTO = new ArrayList<User>();
		for(User entity: entities) {
			usersDTO.add(entity);
		}
		logger.info("Entity: "+entities);
		logger.info("DTO: "+usersDTO);
		return usersDTO;
	}

	@Override
	public User getUserByUserNameAndPassword(String userName, String password) {
		User user = registerRepo.findByUserNameAndPassword(userName, password).get();
		return user;
	}
	
	@Override
	public User getUserById(int id) throws NoClassDefFoundError{
		Optional<User> user= registerRepo.findById(id);
		User userid = user.get();
		return userid;
	}


}
