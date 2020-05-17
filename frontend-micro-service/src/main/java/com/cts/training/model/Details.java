package com.cts.training.model;

import java.time.LocalDateTime;

import java.util.List;
import java.util.Set;


public class Details {
	
	
	private int requestId;
	private String userName;
	private String firstName;
	private String lastName;
	private int age;
	private String email;
	private long phone;
	private String reason;
	private String source;
	private String destination;
	private LocalDateTime openDateTime;
	private int userId;
	
	//@Transient
	private String status;
	
	public Details() { }

	public Details(String userName, String firstName, String lastName, int age, String email, long phone, String reason, String source,
			String destination, int userId) {
		super();
		this.userName = userName;
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.email = email;
		this.phone = phone;
		this.reason = reason;
		this.source = source;
		this.destination = destination;
		this.userId = userId;
	}
	
	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getRequestId() {
		return requestId;
	}

	public void setRequestId(int requestId) {
		this.requestId = requestId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {
		this.phone = phone;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}


	public LocalDateTime getOpenDateTime() {
		return openDateTime;
	}

	public void setOpenDateTime(LocalDateTime openDateTime) {
		this.openDateTime = openDateTime;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Details [requestId=" + requestId + ", userName=" + userName + ", firstName=" + firstName + ", lastName="
				+ lastName + ", age=" + age + ", email=" + email + ", phone=" + phone + ", reason=" + reason
				+ ", source=" + source + ", destination=" + destination + ", openDateTime=" + openDateTime + ", status="
				+ status + "]";
	}

	
	

}