import { TestBed, inject } from '@angular/core/testing';
import { RequestService } from './request.service';
describe('RequestService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [RequestService]
        });
    });
    it('should be created', inject([RequestService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=request.service.spec.js.map