import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import swal from 'sweetalert';
import { Global } from '../../services/global';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article: Article;
  public url: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this._articleService.getArticle(id).subscribe(
        response => {
          if (response.article) {
            this.article = response.article;
          } else {
            this._router.navigate(['/home']);
          }

        },
        error => {
          console.log(error);
          this._router.navigate(['/home']);
        }
      );

    });
  }

  delete(id) {

    swal({
      title: "Estas seguro?",
      text: "Una vez que borres el articulo cagaste!",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true
    })
      .then((willDelete) => {
        if (willDelete) {
          this._articleService.delete(id).subscribe(
            response => {
              swal("El articulo ha sido borrado", {
                icon: "success",
              });
              this._router.navigate(['/blog']);
            },
            error => {
              console.log(error);
              this._router.navigate(['/blog']);
            }
          );


        } else {
          swal("Tranqui que no se borró nada!");
        }
      });

  }

}
