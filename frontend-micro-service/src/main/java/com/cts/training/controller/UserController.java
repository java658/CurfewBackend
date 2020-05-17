package com.cts.training.controller;

import java.util.ArrayList;






import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.cts.training.config.FrontendConfiguration;

import com.cts.training.model.User;

import com.cts.training.service.FrontendService;
import com.netflix.appinfo.InstanceInfo;

import com.netflix.discovery.EurekaClient;
import com.netflix.discovery.shared.Application;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/user")
public class UserController {

	
	@Autowired
	RestTemplate restTemplate;
	
	@Autowired
	FrontendConfiguration configuration;
	
	
	@Autowired
	private EurekaClient eurekaClient;
	
 	@Autowired
	FrontendService frontEndService;
	
	
	@Value("${service.backendService.serviceId}")  
	private String backendServiceId;
	
	public String basicUrl = "http://";
	
	@GetMapping("/getallusers")//-----> SHOWS ALL USERS
	public List<User> getAll(){
		List<User> list = new ArrayList<User>();
		Application application = eurekaClient.getApplication(backendServiceId);
		InstanceInfo instanceInfo = application.getInstances().get(0);
		String url = "http://"+instanceInfo.getIPAddr()+":"+instanceInfo.getPort()+"/register";
		HttpHeaders header = new HttpHeaders();
		header.setBasicAuth(configuration.getBackendUsername(), configuration.getBackendPassword());
		HttpEntity<String> requestEntity = new HttpEntity<String>( header); 
		
		list = restTemplate.exchange(url,
               HttpMethod.GET, requestEntity, new ParameterizedTypeReference<List<User>>() { }).getBody();
		return list;
	}
	
	
	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody User user) {
		Application application = eurekaClient.getApplication(backendServiceId);
		InstanceInfo instanceInfo = application.getInstances().get(0);
		String url = "http://"+instanceInfo.getIPAddr()+":"+instanceInfo.getPort()+"/register";
		HttpHeaders header = frontEndService.getAuthHeader();
		user.setUser("user");
		HttpEntity<User> requestEntity = new HttpEntity<>(user,header);
		try {
			ResponseEntity<?> response = restTemplate
					.exchange(url, HttpMethod.POST, requestEntity, new ParameterizedTypeReference<User>() {
					});
			return response;
		} catch (Exception e) {
			System.out.println(e.getStackTrace());
			return new ResponseEntity<String>("Not Registered",HttpStatus.BAD_REQUEST);
			
		}
	
	}
	
	@GetMapping("/getuserbyid/{id}")
	public ResponseEntity<?> getUserById(@PathVariable Integer id) {
		Application application = eurekaClient.getApplication(backendServiceId);
		InstanceInfo instanceInfo = application.getInstances().get(0);
		String url = "http://"+instanceInfo.getIPAddr()+":"+instanceInfo.getPort()+"/register/"+id;
		HttpHeaders header = new HttpHeaders();
		header.setBasicAuth(configuration.getBackendUsername(), configuration.getBackendPassword());
		
		
		HttpEntity<User> requestEntity = new HttpEntity<User>(header);
		try {
			ResponseEntity<?> response = restTemplate
					.exchange(url, HttpMethod.GET, requestEntity, new ParameterizedTypeReference<User>() {
					});
			return response;
		} catch (Exception e) {
			System.out.println(e.getStackTrace());
			return new ResponseEntity<String>("Not Registered",HttpStatus.BAD_REQUEST);
			 
		}
		
	}


	@GetMapping("/login/{userName}/{password}")
    public ResponseEntity<?> userLogin(@PathVariable String userName,@PathVariable String password){
		Application application = eurekaClient.getApplication(backendServiceId);
		InstanceInfo instanceInfo = application.getInstances().get(0);
		String url = "http://"+instanceInfo.getIPAddr()+":"+instanceInfo.getPort()+"/register/"+userName+"/"+password;
		HttpHeaders header = new HttpHeaders();
		header.setBasicAuth(configuration.getBackendUsername(), configuration.getBackendPassword());
		
		
		HttpEntity<User> requestEntity = new HttpEntity<User>(header);
		try {
			ResponseEntity<?> response = restTemplate
					.exchange(url, HttpMethod.GET, requestEntity, new ParameterizedTypeReference<User>() {
					});
			return response;
		} catch (Exception e) {
			System.out.println(e.getStackTrace());
			return new ResponseEntity<String>("Not Registered",HttpStatus.BAD_REQUEST);
			
		}
		
		
	}
	
}
 