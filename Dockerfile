FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build-env
WORKDIR /app
COPY ./quest_web.csproj /app/
EXPOSE 4242
RUN dotnet restore "./quest_web.csproj"
