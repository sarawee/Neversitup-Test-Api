import { Test, TestingModule } from '@nestjs/testing';
import { TestController } from './test.controller';
import { TestService } from './test.service';

describe('TestController', () => {
  let testController: TestController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TestController],
      providers: [TestService]
    }).compile();

    testController = app.get<TestController>(TestController);
  });

  describe('/test/permutation?input=ab', () => {
    it('input "ab" should return ["ab", "ba"]', () => {
      expect(testController.getPermutation({ input: 'ab' })).toStrictEqual(['ab', 'ba']);
    });
  });

  describe('/test/findodd', () => {
    it('input [1,1,2] should return 2', () => {
      expect(testController.postFindOddOccurrence({ input: [1, 1, 2] })).toBe(2);
    });
  });

  describe('/test/countsmile', () => {
    it('input [";D", ":-(", ":-)", ";~)"] should return 3', () => {
      expect(testController.postCountSmile({ input: [';D', ':-(', ':-)', ';~)'] })).toBe(3);
    });
  });
});
