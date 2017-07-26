import { Component, OnInit } from '@angular/core';

// Services
import { ConfigService } from './shared/services/config.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.aura.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  private configs: any;

  private loaded: boolean = false;

  constructor(private configService: ConfigService) {}

  public ngOnInit(): void {
    this.configService.getConfig()
                      .subscribe(
                        (data) => {
                          this.configs = data;

                          localStorage.setItem('product', this.configs.product);
                          localStorage.setItem('account', this.configs.account);
                          localStorage.setItem('errorDuration', this.configs.errorDuration);
                          localStorage.setItem('theme', this.configs.theme);
                        },
                        (err) => {
                          console.info(err);
                        },
                        () => {
                          this.loaded = true;
                        }
                      );
  }
}
