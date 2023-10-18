"use strict";
/*
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseTokenRequestHandler = void 0;
var errors_1 = require("./errors");
var query_string_utils_1 = require("./query_string_utils");
var token_response_1 = require("./token_response");
var xhr_1 = require("./xhr");
/**
 * The default token request handler.
 */
var BaseTokenRequestHandler = /** @class */ (function () {
    function BaseTokenRequestHandler(requestor, utils) {
        if (requestor === void 0) { requestor = new xhr_1.JQueryRequestor(); }
        if (utils === void 0) { utils = new query_string_utils_1.BasicQueryStringUtils(); }
        this.requestor = requestor;
        this.utils = utils;
    }
    BaseTokenRequestHandler.prototype.isTokenResponse = function (response) {
        return response.error === undefined;
    };
    BaseTokenRequestHandler.prototype.performRevokeTokenRequest = function (configuration, request) {
        var revokeTokenResponse = this.requestor.xhr({
            url: configuration.revocationEndpoint,
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: this.utils.stringify(request.toStringMap())
        });
        return revokeTokenResponse.then(function (response) {
            return true;
        });
    };
    BaseTokenRequestHandler.prototype.performTokenRequest = function (configuration, request, xhrSettings) {
        var _this = this;
        var tokenResponse = this.requestor.xhr(__assign({ url: configuration.tokenEndpoint, method: 'POST', dataType: 'json', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, data: this.utils.stringify(request.toStringMap()) }, xhrSettings));
        return tokenResponse.then(function (response) {
            if (_this.isTokenResponse(response)) {
                return new token_response_1.TokenResponse(response);
            }
            else {
                return Promise.reject(new errors_1.AppAuthError(response.error, new token_response_1.TokenError(response)));
            }
        });
    };
    return BaseTokenRequestHandler;
}());
exports.BaseTokenRequestHandler = BaseTokenRequestHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW5fcmVxdWVzdF9oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rva2VuX3JlcXVlc3RfaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7OztHQVlHOzs7Ozs7Ozs7Ozs7OztBQUdILG1DQUFzQztBQUN0QywyREFBNkU7QUFHN0UsbURBQThGO0FBQzlGLDZCQUFpRDtBQW9CakQ7O0dBRUc7QUFDSDtJQUNFLGlDQUNvQixTQUE0QyxFQUM1QyxLQUFxRDtRQURyRCwwQkFBQSxFQUFBLGdCQUEyQixxQkFBZSxFQUFFO1FBQzVDLHNCQUFBLEVBQUEsWUFBOEIsMENBQXFCLEVBQUU7UUFEckQsY0FBUyxHQUFULFNBQVMsQ0FBbUM7UUFDNUMsVUFBSyxHQUFMLEtBQUssQ0FBZ0Q7SUFBRyxDQUFDO0lBRXJFLGlEQUFlLEdBQXZCLFVBQXdCLFFBQ2M7UUFDcEMsT0FBUSxRQUEyQixDQUFDLEtBQUssS0FBSyxTQUFTLENBQUM7SUFDMUQsQ0FBQztJQUVELDJEQUF5QixHQUF6QixVQUNJLGFBQWdELEVBQ2hELE9BQTJCO1FBQzdCLElBQUksbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQVU7WUFDcEQsR0FBRyxFQUFFLGFBQWEsQ0FBQyxrQkFBa0I7WUFDckMsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUUsRUFBQyxjQUFjLEVBQUUsbUNBQW1DLEVBQUM7WUFDOUQsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNsRCxDQUFDLENBQUM7UUFFSCxPQUFPLG1CQUFtQixDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVE7WUFDdEMsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxxREFBbUIsR0FBbkIsVUFDSSxhQUFnRCxFQUNoRCxPQUFxQixFQUNyQixXQUFnQztRQUhwQyxpQkFxQkM7UUFqQkMsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFlBQ3BDLEdBQUcsRUFBRSxhQUFhLENBQUMsYUFBYSxFQUNoQyxNQUFNLEVBQUUsTUFBTSxFQUNkLFFBQVEsRUFBRSxNQUFNLEVBQ2hCLE9BQU8sRUFBRSxFQUFDLGNBQWMsRUFBRSxtQ0FBbUMsRUFBQyxFQUM5RCxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQzlDLFdBQVcsRUFDZCxDQUFDO1FBRUgsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUTtZQUNoQyxJQUFJLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2xDLE9BQU8sSUFBSSw4QkFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3BDO2lCQUFNO2dCQUNMLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FDakIsSUFBSSxxQkFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSwyQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqRTtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FBQyxBQS9DRCxJQStDQztBQS9DWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuICogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZVxuICogTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXJcbiAqIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtBdXRob3JpemF0aW9uU2VydmljZUNvbmZpZ3VyYXRpb259IGZyb20gJy4vYXV0aG9yaXphdGlvbl9zZXJ2aWNlX2NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHtBcHBBdXRoRXJyb3J9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7QmFzaWNRdWVyeVN0cmluZ1V0aWxzLCBRdWVyeVN0cmluZ1V0aWxzfSBmcm9tICcuL3F1ZXJ5X3N0cmluZ191dGlscyc7XG5pbXBvcnQge1Jldm9rZVRva2VuUmVxdWVzdH0gZnJvbSAnLi9yZXZva2VfdG9rZW5fcmVxdWVzdCc7XG5pbXBvcnQge1Rva2VuUmVxdWVzdH0gZnJvbSAnLi90b2tlbl9yZXF1ZXN0JztcbmltcG9ydCB7VG9rZW5FcnJvciwgVG9rZW5FcnJvckpzb24sIFRva2VuUmVzcG9uc2UsIFRva2VuUmVzcG9uc2VKc29ufSBmcm9tICcuL3Rva2VuX3Jlc3BvbnNlJztcbmltcG9ydCB7SlF1ZXJ5UmVxdWVzdG9yLCBSZXF1ZXN0b3J9IGZyb20gJy4veGhyJztcblxuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gaW50ZXJmYWNlIHdoaWNoIGNhbiBtYWtlIGEgdG9rZW4gcmVxdWVzdC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUb2tlblJlcXVlc3RIYW5kbGVyIHtcbiAgLyoqXG4gICAqIFBlcmZvcm1zIHRoZSB0b2tlbiByZXF1ZXN0LCBnaXZlbiB0aGUgc2VydmljZSBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgcGVyZm9ybVRva2VuUmVxdWVzdChcbiAgICAgIGNvbmZpZ3VyYXRpb246IEF1dGhvcml6YXRpb25TZXJ2aWNlQ29uZmlndXJhdGlvbixcbiAgICAgIHJlcXVlc3Q6IFRva2VuUmVxdWVzdCxcbiAgICAgIHhoclNldHRpbmdzPzogSlF1ZXJ5QWpheFNldHRpbmdzKTogUHJvbWlzZTxUb2tlblJlc3BvbnNlPjtcblxuICBwZXJmb3JtUmV2b2tlVG9rZW5SZXF1ZXN0KFxuICAgICAgY29uZmlndXJhdGlvbjogQXV0aG9yaXphdGlvblNlcnZpY2VDb25maWd1cmF0aW9uLFxuICAgICAgcmVxdWVzdDogUmV2b2tlVG9rZW5SZXF1ZXN0KTogUHJvbWlzZTxib29sZWFuPjtcbn1cblxuLyoqXG4gKiBUaGUgZGVmYXVsdCB0b2tlbiByZXF1ZXN0IGhhbmRsZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBCYXNlVG9rZW5SZXF1ZXN0SGFuZGxlciBpbXBsZW1lbnRzIFRva2VuUmVxdWVzdEhhbmRsZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyByZWFkb25seSByZXF1ZXN0b3I6IFJlcXVlc3RvciA9IG5ldyBKUXVlcnlSZXF1ZXN0b3IoKSxcbiAgICAgIHB1YmxpYyByZWFkb25seSB1dGlsczogUXVlcnlTdHJpbmdVdGlscyA9IG5ldyBCYXNpY1F1ZXJ5U3RyaW5nVXRpbHMoKSkge31cblxuICBwcml2YXRlIGlzVG9rZW5SZXNwb25zZShyZXNwb25zZTogVG9rZW5SZXNwb25zZUpzb258XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRva2VuRXJyb3JKc29uKTogcmVzcG9uc2UgaXMgVG9rZW5SZXNwb25zZUpzb24ge1xuICAgIHJldHVybiAocmVzcG9uc2UgYXMgVG9rZW5FcnJvckpzb24pLmVycm9yID09PSB1bmRlZmluZWQ7XG4gIH1cblxuICBwZXJmb3JtUmV2b2tlVG9rZW5SZXF1ZXN0KFxuICAgICAgY29uZmlndXJhdGlvbjogQXV0aG9yaXphdGlvblNlcnZpY2VDb25maWd1cmF0aW9uLFxuICAgICAgcmVxdWVzdDogUmV2b2tlVG9rZW5SZXF1ZXN0KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgbGV0IHJldm9rZVRva2VuUmVzcG9uc2UgPSB0aGlzLnJlcXVlc3Rvci54aHI8Ym9vbGVhbj4oe1xuICAgICAgdXJsOiBjb25maWd1cmF0aW9uLnJldm9jYXRpb25FbmRwb2ludCxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ30sXG4gICAgICBkYXRhOiB0aGlzLnV0aWxzLnN0cmluZ2lmeShyZXF1ZXN0LnRvU3RyaW5nTWFwKCkpXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmV2b2tlVG9rZW5SZXNwb25zZS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgcGVyZm9ybVRva2VuUmVxdWVzdChcbiAgICAgIGNvbmZpZ3VyYXRpb246IEF1dGhvcml6YXRpb25TZXJ2aWNlQ29uZmlndXJhdGlvbixcbiAgICAgIHJlcXVlc3Q6IFRva2VuUmVxdWVzdCxcbiAgICAgIHhoclNldHRpbmdzPzogSlF1ZXJ5QWpheFNldHRpbmdzKTogUHJvbWlzZTxUb2tlblJlc3BvbnNlPiB7XG4gICAgbGV0IHRva2VuUmVzcG9uc2UgPSB0aGlzLnJlcXVlc3Rvci54aHI8VG9rZW5SZXNwb25zZUpzb258VG9rZW5FcnJvckpzb24+KHtcbiAgICAgIHVybDogY29uZmlndXJhdGlvbi50b2tlbkVuZHBvaW50LFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLCAgLy8gYWRkaW5nIGltcGxpY2l0IGRhdGFUeXBlXG4gICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnfSxcbiAgICAgIGRhdGE6IHRoaXMudXRpbHMuc3RyaW5naWZ5KHJlcXVlc3QudG9TdHJpbmdNYXAoKSksXG4gICAgICAuLi54aHJTZXR0aW5nc1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRva2VuUmVzcG9uc2UudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBpZiAodGhpcy5pc1Rva2VuUmVzcG9uc2UocmVzcG9uc2UpKSB7XG4gICAgICAgIHJldHVybiBuZXcgVG9rZW5SZXNwb25zZShyZXNwb25zZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8VG9rZW5SZXNwb25zZT4oXG4gICAgICAgICAgICBuZXcgQXBwQXV0aEVycm9yKHJlc3BvbnNlLmVycm9yLCBuZXcgVG9rZW5FcnJvcihyZXNwb25zZSkpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19
