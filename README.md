# Simple JSON Validation exercise using Ajv in NodeJs




# Goal
When launching a node application and also upon a REST call, you have to validate a Json file with a JsonSchema file which is provided.

# Expected Result
You should deliver a Github public repository which we can test.  
On a launch of the node application it should validate that the provided json file is valid with the schema file also provided. We should also be able to make a GET REST call "http://<server>/datamodel/check") to get the same result. 
Sending a Boolean to show if the file is ok is a good point. Sending more detail on the potential errors is better.
  
# Inputs
Attach is provided the json file to test : datamodel.json 
And the schema to test the previous file : datamodelSchema.json 
You must use nodeJs 
In order to understand json schema validation try this : https://jsonschemalint.com/#/version/draft06/markup/json 
