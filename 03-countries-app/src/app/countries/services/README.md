# Service Definitions

In Angular, a class with the @Injectable() decorator that encapsulates non-UI logic and code that can be reused across an application. Angular distinguishes components from services to increase modularity and reusability.

The @Injectable() metadata allows the service class to be used with the dependency injection mechanism.

## Usage/Examples

```javascript
export class HeroService {
  private heroes: Hero[] = [];

  constructor(
    private backend: BackendService,
    private logger: Logger) { }

  getHeroes() {
    this.backend.getAll(Hero).then( (heroes: Hero[]) => {
      this.logger.log(`Fetched ${heroes.length} heroes.`);
      this.heroes.push(...heroes); // fill cache
    });
    return this.heroes;
  }
}
```


## Dependency injection (DI)
A design pattern and mechanism for creating and delivering some parts of an application (dependencies) to other parts of an application that require them.

![](https://angular.io/generated/images/guide/architecture/dependency-injection.png)
![](https://angular.io/generated/images/guide/architecture/injector-injects.png)

### Info from

- [Angular Glossary](https://angular.io/guide/glossary#service)

- [Angular Docs - Architecture-services](https://angular.io/guide/architecture-services)