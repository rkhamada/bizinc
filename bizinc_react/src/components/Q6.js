import React from "react";

const Q6 = () => {
  return (
    <div style={{ padding: "0rem", textAlign: "start" }}>
      <p>
        <strong className="title">Azure App Services</strong>
        <br />
        <br />
        <strong className="title">1. Describe the steps to deploy a simple Node.js application to Azure App Services:</strong>
      </p>
      <p> It can be done by using the CLI or directly at azure plataform. I'll focus on the CLI:</p>
      <ol>
        <li>
          <strong>Create a Resource Group</strong>
          <ul>
            <li>Open your terminal and run the following command to create a new resource group:</li>
            <li>
              <code>az group create --name myResourceGroup --location "East US"</code>
            </li>
          </ul>
        </li>

        <li>
          <strong>Create an App Service Plan</strong>
          <ul>
            <li>Run the following command to create an App Service Plan:</li>
            <li>
              <code>az appservice plan create --name myAppServicePlan --resource-group myResourceGroup --sku FREE</code>
            </li>
          </ul>
        </li>

        <li>
          <strong>Create the Node.js App Service</strong>
          <ul>
            <li>Use the following command to create a new App Service for your Node.js application:</li>
            <li>
              <code>az webapp create --resource-group myResourceGroup --plan myAppServicePlan --name bizinc-test --runtime "NODE|14-lts"</code>
            </li>
          </ul>
        </li>

        <li>
          <strong>Deploy Your Node.js Application</strong>
          <ul>
            <li>Navigate to your Node.js application directory in your terminal and use Git to initialize a repository (if not already done):</li>
            <li>
              <code>git init</code>
            </li>
            <li>Add Azure as a remote repository:</li>
            <li>
              <code>git remote add azure https://bizinc-test.scm.azurewebsites.net:443/bizinc-test.git</code>
            </li>
            <li>Add and commit your files:</li>
            <li>
              <code>git add .</code>
              <br />
              <code>git commit -m "Initial commit"</code>
            </li>
            <li>Push your code to Azure to deploy:</li>
            <li>
              <code>git push azure master</code>
            </li>
            <li>Alternatively, you can deploy directly using the Azure CLI:</li>
            <li>
              <code>az webapp up --name bizinc-test --resource-group myResourceGroup --location "East US"</code>
            </li>
          </ul>
        </li>

        <li>
          <strong>Access Your Deployed Application</strong>
          <ul>
            <li>Once the deployment is complete, your Node.js application will be available at:</li>
            <li>
              <code>https://bizinc-test.azurewebsites.net</code>
            </li>
          </ul>
        </li>
      </ol>
      <br /> <br />
      <p>
        <strong className="title">2. What is a common benefit of using Azure App Services for hosting applications?</strong>
      </p>
      <p>
        A common benefit of using Azure App Services is its simplicity and ease of use, especially through the Azure Portal and CLI. <br />
        It provides a fully managed environment, reducing the overhead of infrastructure management. <br />
        Features like automatic scaling, load balancing, and continuous deployment make it easy to deploy and maintain applications with minimal operational effort. <br />
        Additionally, the integration with development tools like GitHub, Bitbucket, and Azure DevOps facilitates continuous integration and deployment pipelines, streamlining the entire development and deployment process.
      </p>
    </div>
  );
};

export default Q6;
