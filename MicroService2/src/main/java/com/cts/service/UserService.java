package com.cts.service;


import java.util.List;

import com.cts.model.User;

public interface UserService {
	
	public User insert(User user);
	
	public List<User> getAllUsers();
	
	public User getUserById(int id);
	
	public User getUserByUserNameAndPassword(String userName, String password);

	
}
