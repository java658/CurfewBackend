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
import com.cts.training.model.Details;
import com.cts.training.model.User;

import com.cts.training.service.FrontendService;
import com.netflix.appinfo.InstanceInfo;
import com.netflix.discovery.EurekaClient;
import com.netflix.discovery.shared.Application;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/Details")
public class DetailsController {
	
	
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
	
	
	
	@PostMapping("/detailsuser")
	public ResponseEntity<?> save(@RequestBody Details user){
			
			Application application = eurekaClient.getApplication(backendServiceId);
			InstanceInfo instanceInfo = application.getInstances().get(0);
			String url = "http://"+instanceInfo.getIPAddr()+":"+instanceInfo.getPort()+"/details";
			HttpHeaders header = frontEndService.getAuthHeader();
			//user.setUser("user");
			HttpEntity<Details> requestEntity = new HttpEntity<>(user,header);
			try {
				ResponseEntity<?> response = restTemplate
						.exchange(url, HttpMethod.POST, requestEntity, new ParameterizedTypeReference<Details>() {
						});
				return response;
			} catch (Exception e) {
				System.out.println(e.getStackTrace());
				return new ResponseEntity<String>("Not Registered",HttpStatus.BAD_REQUEST);
				
			}
		
		
	}
	
	
	@GetMapping("/getallrequests")
	public List<Details> getAllRequestDetails(){
		List<Details> list = new ArrayList<Details>();
		Application application = eurekaClient.getApplication(backendServiceId);
		InstanceInfo instanceInfo = application.getInstances().get(0);
		String url = "http://"+instanceInfo.getIPAddr()+":"+instanceInfo.getPort()+"/details/requests";
		HttpHeaders header = new HttpHeaders();
		header.setBasicAuth(configuration.getBackendUsername(), configuration.getBackendPassword());
		HttpEntity<String> requestEntity = new HttpEntity<String>( header); 
		
		list = restTemplate.exchange(url,
               HttpMethod.GET, requestEntity, new ParameterizedTypeReference<List<Details>>() { }).getBody();
		return list;
	}
	
	@GetMapping("/getallprocessing")
	public List<Details> getAllProcessingDetails(){
		List<Details> list = new ArrayList<Details>();
		Application application = eurekaClient.getApplication(backendServiceId);
		InstanceInfo instanceInfo = application.getInstances().get(0);
		String url = "http://"+instanceInfo.getIPAddr()+":"+instanceInfo.getPort()+"/details/process";
		HttpHeaders header = new HttpHeaders();
		header.setBasicAuth(configuration.getBackendUsername(), configuration.getBackendPassword());
		HttpEntity<String> requestEntity = new HttpEntity<String>( header); 
		
		list = restTemplate.exchange(url,
               HttpMethod.GET, requestEntity, new ParameterizedTypeReference<List<Details>>() { }).getBody();
		return list;
	}
	
	@GetMapping("/getallfinal")//-----> SHOWS ALL USERS
	public List<Details> getAllFinalStage(){
		List<Details> list = new ArrayList<Details>();
		Application application = eurekaClient.getApplication(backendServiceId);
		InstanceInfo instanceInfo = application.getInstances().get(0);
		String url = "http://"+instanceInfo.getIPAddr()+":"+instanceInfo.getPort()+"/details/finalstage";
		HttpHeaders header = new HttpHeaders();
		header.setBasicAuth(configuration.getBackendUsername(), configuration.getBackendPassword());
		HttpEntity<String> requestEntity = new HttpEntity<String>( header); 
		
		list = restTemplate.exchange(url,
               HttpMethod.GET, requestEntity, new ParameterizedTypeReference<List<Details>>() { }).getBody();
		return list;
	}
	@GetMapping("/updatetoprocessing/{id}")
	public User updateToProcessing(@PathVariable Integer id){
		
		Application application = eurekaClient.getApplication(backendServiceId);
		InstanceInfo instanceInfo = application.getInstances().get(0);
		String url = "http://"+instanceInfo.getIPAddr()+":"+instanceInfo.getPort()+"/details/"+id+"/status/processing";
		HttpHeaders header = new HttpHeaders();
		header.setBasicAuth(configuration.getBackendUsername(), configuration.getBackendPassword());
		HttpEntity<String> requestEntity = new HttpEntity<String>( header); 
		
		User list = restTemplate.exchange(url,
               HttpMethod.GET, requestEntity, new ParameterizedTypeReference<User>() { }).getBody();
		return list;
	}
	 
	
	
	@GetMapping("/updatetofinalstage/{id}")
	public User updateToFinalStage(@PathVariable Integer id){
		
		Application application = eurekaClient.getApplication(backendServiceId);
		InstanceInfo instanceInfo = application.getInstances().get(0);
		String url = "http://"+instanceInfo.getIPAddr()+":"+instanceInfo.getPort()+"/details/"+id+"/status/finalstage";
		HttpHeaders header = new HttpHeaders();
		header.setBasicAuth(configuration.getBackendUsername(), configuration.getBackendPassword());
		HttpEntity<String> requestEntity = new HttpEntity<String>( header); 
		
		User list = restTemplate.exchange(url,
               HttpMethod.GET, requestEntity, new ParameterizedTypeReference<User>() { }).getBody();
		return list;
	}
	@GetMapping("/updatetosuccess/{id}")
	public User updateToSuccess(@PathVariable Integer id){
		
		Application application = eurekaClient.getApplication(backendServiceId);
		InstanceInfo instanceInfo = application.getInstances().get(0);
		String url = "http://"+instanceInfo.getIPAddr()+":"+instanceInfo.getPort()+"/details/"+id+"/status/success";
		HttpHeaders header = new HttpHeaders();
		header.setBasicAuth(configuration.getBackendUsername(), configuration.getBackendPassword());
		HttpEntity<String> requestEntity = new HttpEntity<String>( header); 
		
		User list = restTemplate.exchange(url,
               HttpMethod.GET, requestEntity, new ParameterizedTypeReference<User>() { }).getBody();
		return list;
	}
	
	@GetMapping("/updatetorejected/{id}")// --------------->not working
	public User updateToRejected(@PathVariable Integer id){
		
		Application application = eurekaClient.getApplication(backendServiceId);
		InstanceInfo instanceInfo = application.getInstances().get(0);
		String url = "http://"+instanceInfo.getIPAddr()+":"+instanceInfo.getPort()+"/details/"+id+"/status/rejected";
		HttpHeaders header = new HttpHeaders();
		header.setBasicAuth(configuration.getBackendUsername(), configuration.getBackendPassword());
		HttpEntity<String> requestEntity = new HttpEntity<String>( header); 
		
		User list = restTemplate.exchange(url,
               HttpMethod.GET, requestEntity, new ParameterizedTypeReference<User>() { }).getBody();
		return list;
	}
	
	
	@GetMapping("/status/{id}")//-----> SHOWS ALL USERS
	public List<Details> findStatus(@PathVariable Integer id){
		List<Details> list = new ArrayList<Details>();
		Application application = eurekaClient.getApplication(backendServiceId);
		InstanceInfo instanceInfo = application.getInstances().get(0);
		String url = "http://"+instanceInfo.getIPAddr()+":"+instanceInfo.getPort()+"/details/position/"+id+"/status";
		HttpHeaders header = new HttpHeaders();
		header.setBasicAuth(configuration.getBackendUsername(), configuration.getBackendPassword());
		HttpEntity<String> requestEntity = new HttpEntity<String>( header); 
		
		list = restTemplate.exchange(url,
               HttpMethod.GET, requestEntity, new ParameterizedTypeReference<List<Details>>() { }).getBody();
		return list;
	}
	
	@GetMapping("/details/{id}")
	public ResponseEntity<?> getElementById(@PathVariable Integer id) {
		Application application = eurekaClient.getApplication(backendServiceId);
		InstanceInfo instanceInfo = application.getInstances().get(0);
		String url = "http://"+instanceInfo.getIPAddr()+":"+instanceInfo.getPort()+"/details/"+id;
		HttpHeaders header = new HttpHeaders();
		header.setBasicAuth(configuration.getBackendUsername(), configuration.getBackendPassword());
		
		
		HttpEntity<Details> requestEntity = new HttpEntity<Details>(header);
		try {
			ResponseEntity<?> response = restTemplate
					.exchange(url, HttpMethod.GET, requestEntity, new ParameterizedTypeReference<Details>() {
					});
			return response;
		} catch (Exception e) {
			System.out.println(e.getStackTrace());
			return new ResponseEntity<String>("Not Registered",HttpStatus.BAD_REQUEST);
			
		}
		
	}
	

}
