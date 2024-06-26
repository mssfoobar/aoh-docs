---
sidebar_position: 30
---

# Setup Platform infrastructure

## AWS
### Preparation: 

go to  `/ar2-infra/terraform/terraform-aws-eks-blueprints-v4/deployment/<yourclustername> /main.tf`

search for the line containing this: 
'#aoh: name of ec2 instances. (TO CHANGE)'

Change the "initial_xxx_dev" to a name of your choosing, for example "AOH_nodes".
The terraform scripts will then generate your worker nodes with names that you chose. This has no functional function.

### Execution:
Go  to:
`/ar2-infra/terraform/terraform-aws-eks-blueprints-v4/deployment/<yourclustername>`

Execute `terraform apply`.

Wait for 40 minutes

NOTE 1: if there is a previous terraform state within the folder or the s3 bucket, the terraform scripts may require you to revolve the state difference before proceeding
NOTE 2: If the terraform scipt is complaining that the Dynamo DB table name already existed, it can be resolved by using another Dynamo DB table.

## AWS - Database (If required)
Setup the AWS RDS if you choose to use instead the RDS for your project 
