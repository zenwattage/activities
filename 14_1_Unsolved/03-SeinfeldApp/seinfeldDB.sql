DROP DATABASE IF EXISTS seinfeldDB;

CREATE DATABASE seinfeldDB;

USE seinfeldDB;

CREATE TABLE actors
(
  id int AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  coolness_points int,
  attitude VARCHAR(45),
  PRIMARY KEY(id)
);

  -- Inserted a set of records into the table
  INSERT INTO actors
  (name, coolness_points, attitude)
  VALUES
    ("Jerry", 100, "happy"),
    
    ("Elaine",100,"ecstatic"),
    
    ("Kramer",99,"Giddyup"),
    
    ("George",98,"Why is something wrong?");
    
    
