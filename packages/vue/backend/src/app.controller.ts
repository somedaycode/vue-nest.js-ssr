import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/*')
  public async getSSRHTML(@Req() req, @Res() res) {
    const context = { url: req.url };
    const html = await this.appService.getSSRHTML();
    html.renderToString(context, (err, html) => {
      res.send(html);
    });
  }
}
