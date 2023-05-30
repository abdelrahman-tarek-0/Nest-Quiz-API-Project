import { LoggingInterceptor } from './logger.interceptor';

describe('InterceptorsInterceptor', () => {
  it('should be defined', () => {
    expect(new LoggingInterceptor()).toBeDefined();
  });
});
