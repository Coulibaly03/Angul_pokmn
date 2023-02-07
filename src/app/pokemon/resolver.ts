import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, mergeMap, Observable, of, pipe } from 'rxjs';
import { PokemonService } from './pokemon.service';

@Injectable({ providedIn: 'root' })
export class UserExtraRoutingResolveService implements Resolve< any> {
  constructor(protected service: PokemonService, protected router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable< string | null > {
    const id = route.params['id'];
    if (id) {
      return this.service.pipe(
        mergeMap((PokemonService: HttpResponse<PokemonService>) => {
          if (PokemonService.body) {
            return of(PokemonService.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(null);
  }
}
