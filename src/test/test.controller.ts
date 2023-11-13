import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { TestService } from './test.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('test')
@ApiTags('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get('/permutation')
  getPermutation(@Query() query: { input: string }): string[] {
    return this.testService.generatePermutation(query.input);
  }

  @Post('/findodd')
  postFindOddOccurrence(@Body() body): number {
    return this.testService.findOddOccurrence(body.input);
  }

  @Post('/countsmile')
  postCountSmile(@Body() body): number {
    return this.testService.countSmiley(body.input);
  }
}
