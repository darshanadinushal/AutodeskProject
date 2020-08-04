#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["Autodesk.Application.RestService/Autodesk.Application.RestService.csproj", "Autodesk.Application.RestService/"]
RUN dotnet restore "Autodesk.Application.RestService/Autodesk.Application.RestService.csproj"
COPY . .
WORKDIR "/src/Autodesk.Application.RestService"
RUN dotnet build "Autodesk.Application.RestService.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Autodesk.Application.RestService.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Autodesk.Application.RestService.dll"]