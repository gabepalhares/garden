---
id: intro-postgresql
title: Intro
tags:
  - postgresql
  - sql
---

### What it is?

It is a relational Database Management System (DBMS) that allows storing, querying, and manipulating data in numerous ways. Among its various differentiators is the PL/pgSQL language.

PL/pgSQL is a language that enables the construction of powerful programs for companies that need to manage tables with millions or billions of records, and therefore, learning this technology facilitates the work of those who manipulate the PostgreSQL DBMS.

### What is the difference between SQL and PL/pgSQL?

We can understand PL/pgSQL as an extension of the SQL language. Indeed, it adds to SQL functionalities that make it a complete programming language, such as flow control, exception handling, loop structures, among others.

### Key Features

- **ACID Compliance:** PostgreSQL ensures atomicity, consistency, isolation, and durability of transactions, which is crucial for maintaining data integrity and reliability.

- **Advanced Data Types:** Supports a wide range of data types beyond standard integers and text, including arrays, JSON, hstore (key-value pairs), and custom types.

- **Extensibility:** Allows users to define their own data types, operators, and functions. It also supports extensions, such as PostGIS for geographic information systems (GIS) and various other plugins for added functionality.

- **Complex Queries:** Provides robust support for complex queries, including subqueries, joins, and aggregations. It also supports full-text search, window functions, and common table expressions (CTEs).

- **Indexes:** Offers a variety of indexing options, including B-tree, hash, GIN, GiST, and BRIN indexes, to optimize query performance and data retrieval.

- **Concurrency Control:** Utilizes Multi-Version Concurrency Control (MVCC) to handle simultaneous transactions without locking issues, improving performance and reliability.

- **Replication and High Availability:** Supports various replication methods, including streaming replication and logical replication, to ensure high availability and data redundancy.

- **Security:** Provides robust security features, including role-based access control, SSL/TLS encryption, and advanced authentication methods.

### Common Use Cases

- **Enterprise Applications:** PostgreSQL is suitable for enterprise-grade applications requiring high data integrity, complex queries, and robust transactional support, such as financial systems and customer relationship management (CRM) systems.

- **Data Warehousing:** Its support for complex queries and large datasets makes PostgreSQL a good choice for data warehousing and business intelligence applications.

- **Web Applications:** Many web applications rely on PostgreSQL for managing user data, content management, and transactional data due to its reliability and advanced features.

- **Geospatial Data:** With the PostGIS extension, PostgreSQL is widely used for managing and analyzing geospatial data, making it suitable for geographic information systems (GIS) and location-based services.