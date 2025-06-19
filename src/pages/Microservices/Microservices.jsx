import React from "react";
import CircuitBreakerViz from "../../components/CircuitBreakerViz";

function Microservices() {
  return (
    <div
      className="microservices-page minimal left-align"
      style={{ marginTop: "2.5rem" }}
    >
      <h2>Microservices</h2>
      <ul style={{ marginTop: "2rem", lineHeight: 1.7 }}>
        <li>
          <strong>SAGA Pattern</strong>
          <ul>
            SAGA is a pattern for maintaining data consistency across multiple
            microservices in distributed transaction scenarios. SAGA breaks a
            transaction into a series of smaller, isolated local transactions,
            each managed by a participating service. If one local transaction
            fails, SAGA triggers compensating transactions to undo the impact of
            previous steps.
            <li style={{ marginTop: "0.7rem" }}>
              <strong>Orchestration:</strong> A central coordinator
              (orchestrator) manages the sequence of local transactions across
              services.
              <br />
              <em>Example technologies:</em> Camunda, Temporal, Netflix
              Conductor
            </li>
            <li>
              <strong>Choreography:</strong> Each service produces and listens
              to events, reacting independently without a central coordinator.
              <br />
              <em>Example technologies:</em> Apache Kafka, RabbitMQ, Axon
              Framework
            </li>
          </ul>
        </li>
        <li style={{ marginTop: "1.2rem" }}>
          <strong>Circuit Breaker Design Pattern</strong>
          <br />
          Prevents repeated calls to a failing service, allowing it to recover
          and protecting the system from cascading failures.
          <br />
          <em>Example technologies:</em> Netflix Hystrix, Resilience4j, Spring
          Cloud Circuit Breaker
          <CircuitBreakerViz />
        </li>
        <li style={{ marginTop: "1.2rem" }}>
          <strong>Discovery Design Pattern</strong>
          <br />
          Enables services to find and communicate with each other dynamically,
          often using a service registry.
          <br />
          <em>Example technologies:</em> Netflix Eureka, Consul, Zookeeper,
          Kubernetes Service Discovery
        </li>
        <li style={{ marginTop: "1.2rem" }}>
          <strong>API Gateway</strong>
          <br />
          A single entry point for clients, handling routing, authentication,
          rate limiting, and aggregation of microservice responses.
          <br />
          <em>Example technologies:</em> Kong, NGINX, AWS API Gateway, Zuul,
          Ambassador
        </li>
        <li style={{ marginTop: "1.2rem" }}>
          <strong>CQRS (Command Query Responsibility Segregation)</strong>
          <br />
          Separates read and write operations into different models, improving
          scalability and performance for complex systems.
          <br />
          <em>Example technologies:</em> Axon Framework, EventStoreDB, Lagom,
          MediatR (for .NET)
        </li>
      </ul>
    </div>
  );
}

export default Microservices;
