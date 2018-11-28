import { FinalizarCompraModule } from './finalizar-compra.module';

describe('FinalizarCompraModule', () => {
  let finalizarCompraModule: FinalizarCompraModule;

  beforeEach(() => {
    finalizarCompraModule = new FinalizarCompraModule();
  });

  it('should create an instance', () => {
    expect(finalizarCompraModule).toBeTruthy();
  });
});
