# ///// INITIAL CONFIG /////
# Linux image to run application on
FROM ubuntu:16.04
MAINTAINER Nathan Wright <nathan.wright@smartbear.com>

# Build variable store
ARG ls_address=127.0.0.1
ARG project_path="" 
ENV ls_address=$ls_address
ENV project_path=$project_path

# Update and add java package
RUN apt-get update

# ///// HANDLE READY API /////
# Create unpack directory, move test script into test folder, license JAR into licensing
RUN mkdir ./readyapi
COPY ./licensing/ready-api-license-manager-1.2.2.jar ./readyapi/licensing/
COPY ./startup_test/basic-project-readyapi-project.xml ./readyapi/startup_test/
COPY ${project_path} ./readyapi/project/run.xml

# Download 2.3.0 tarball from Smartbear + unpack
ADD http://dl.eviware.com/ready-api/2.3.0/ReadyAPI-2.3.0-linux-bin.tar.gz ./readyapi/
RUN tar -xzf ./readyapi/ReadyAPI-2.3.0-linux-bin.tar.gz --directory ./readyapi/

# Clean up
RUN rm ./readyapi/ReadyAPI-2.3.0-linux-bin.tar.gz

# Acquire license, make testrunner executable
RUN ((echo "1")) | java -jar ./readyapi/licensing/ready-api-license-manager-1.2.2.jar -s ${ls_address}:1099
RUN chmod +x ./readyapi/ReadyAPI-2.3.0/bin/testrunner.sh

# Test run when container builds container
RUN sh ./readyapi/ReadyAPI-2.3.0/bin/testrunner.sh "-EDefault environment" ./readyapi/startup_test/basic-project-readyapi-project.xml

# ///// TEST EXECUTION /////
# Executable
ENTRYPOINT [ "./readyapi/ReadyAPI-2.3.0/bin/testrunner.sh" ]

# Default command
CMD ["-EDefault environment", "./readyapi/project/run.xml"]

