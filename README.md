# Solving BlowLTD's Backend Developer Test

## Instructions
This section will contain the instructions on how to run the code for implementation part of the assessment. More information on the assessment can be found in **CHALLENGE.pdf**.

## Considerations
This section will contain my considerations while solving both parts of the assessment. These will better explain the reasoning behind my decisions. As it is expected, while solving the tasks these considerations and reasoning may change and as such, this section may also change accordingly.

### Global considerations
The test consists in designing and implementing part of a payments API. The part that is to be designed/implemented is mainly focused on the **Payment** resources and on operations such as listing, retrieving, creating, deleting and updating. The resource changes are to be commited to a database so that their status is persisted.

An example of what the payment resource might look like is given. As should be expected, I don't possess enough domain knowledge on payment systems to fully understand all the attributes contained in payment. I believe that for testing purposes several of can be ignored. I will try to keep my payment resources as similar as possible to the ones given as example, but I will remove certain details to make the data model simpler. This way the code will be more focused on the API istelf, rather than on the specific data of each resource.

As an example, payment attributes contain other nested complex objects like *beneficiary_party* and *debtor_party*, which from my naive poit of view seem to belong to completely different resources, which are in turn associated with the payment resource. A way that I may use simplify this is to ignore the details inside *beneficiary_party* and *debtor_party* and to assume that they will exist and have an *id* which can be used for associations. the payment resource can then just reference the *beneficiary_party_id* and *debtor_party_id* instead.

### Design Task
The request contains very few details which can be summed in a handful of bullet points:

    - API should be RESTFUL; 
    - API should be able to fetch a payment resource;
    - API should be able to create, update and delete a payment resource;
    - API should be able to list a collection of payment resources;
    - API should be able to persist resource state (e.g. to a database);

For the design stage of the test, only the first four points seem to matter. The API must be RESTful and that means using a proper syntax and request methods.

I will use **OpenAPI version 3** specification to create a description of the payment API. This description can then be used in conjunction with other tools to validate requests, easily test the API implementation and create the documentation as requested.
