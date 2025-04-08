const emails = [
    "user1@gmail.com",
    "user2@yahoo.com",
    "user3@gmail.com",
    "user4@outlook.com",
    "user5@yahoo.com",
    "user6@gmail.com"
  ];
  
  const domains = emails
    .map(email => email.split('@')[1]) 
    .filter((domain, index, self) => self.indexOf(domain) === index)
    .sort();
  
  console.log(domains);