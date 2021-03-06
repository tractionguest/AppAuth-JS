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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenError = exports.TokenResponse = exports.nowInSeconds = void 0;
// constants
var AUTH_EXPIRY_BUFFER = 10 * 60 * -1; // 10 mins in seconds
/**
 * Returns the instant of time in seconds.
 */
exports.nowInSeconds = function () { return Math.round(new Date().getTime() / 1000); };
/**
 * Represents the Token Response type.
 * For more information look at:
 * https://tools.ietf.org/html/rfc6749#section-5.1
 */
var TokenResponse = /** @class */ (function () {
    function TokenResponse(response) {
        this.accessToken = response.access_token;
        this.tokenType = response.token_type || 'bearer';
        this.expiresIn = response.expires_in;
        this.refreshToken = response.refresh_token;
        this.scope = response.scope;
        this.idToken = response.id_token;
        this.issuedAt = response.issued_at || exports.nowInSeconds();
    }
    TokenResponse.prototype.toJson = function () {
        return {
            access_token: this.accessToken,
            id_token: this.idToken,
            refresh_token: this.refreshToken,
            scope: this.scope,
            token_type: this.tokenType,
            issued_at: this.issuedAt,
            expires_in: this.expiresIn
        };
    };
    TokenResponse.prototype.isValid = function (buffer) {
        if (buffer === void 0) { buffer = AUTH_EXPIRY_BUFFER; }
        if (this.expiresIn) {
            var now = exports.nowInSeconds();
            return now < this.issuedAt + this.expiresIn + buffer;
        }
        else {
            return true;
        }
    };
    return TokenResponse;
}());
exports.TokenResponse = TokenResponse;
/**
 * Represents the Token Error type.
 * For more information look at:
 * https://tools.ietf.org/html/rfc6749#section-5.2
 */
var TokenError = /** @class */ (function () {
    function TokenError(tokenError) {
        this.error = tokenError.error;
        this.errorDescription = tokenError.error_description;
        this.errorUri = tokenError.error_uri;
    }
    TokenError.prototype.toJson = function () {
        return {
            error: this.error, error_description: this.errorDescription, error_uri: this.errorUri
        };
    };
    return TokenError;
}());
exports.TokenError = TokenError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW5fcmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdG9rZW5fcmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7R0FZRzs7O0FBdUNILFlBQVk7QUFDWixJQUFNLGtCQUFrQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBRSxxQkFBcUI7QUFFL0Q7O0dBRUc7QUFDVSxRQUFBLFlBQVksR0FBRyxjQUFNLE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUF2QyxDQUF1QyxDQUFDO0FBRTFFOzs7O0dBSUc7QUFDSDtJQVNFLHVCQUFZLFFBQTJCO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLElBQUksb0JBQVksRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQ0UsT0FBTztZQUNMLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVztZQUM5QixRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDdEIsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQ2hDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDMUIsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3hCLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUztTQUMzQixDQUFDO0lBQ0osQ0FBQztJQUVELCtCQUFPLEdBQVAsVUFBUSxNQUFtQztRQUFuQyx1QkFBQSxFQUFBLDJCQUFtQztRQUN6QyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxHQUFHLEdBQUcsb0JBQVksRUFBRSxDQUFDO1lBQ3pCLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7U0FDdEQ7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBdkNELElBdUNDO0FBdkNZLHNDQUFhO0FBeUMxQjs7OztHQUlHO0FBQ0g7SUFLRSxvQkFBWSxVQUEwQjtRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7SUFDdkMsQ0FBQztJQUVELDJCQUFNLEdBQU47UUFDRSxPQUFPO1lBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN0RixDQUFBO0lBQ0gsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQWhCWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4gKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlXG4gKiBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxuICogZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGFjY2VzcyB0b2tlbiB0eXBlcy5cbiAqIEZvciBtb3JlIGluZm9ybWF0aW9uIHNlZTpcbiAqIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NzQ5I3NlY3Rpb24tNy4xXG4gKi9cbmV4cG9ydCB0eXBlIFRva2VuVHlwZSA9ICdiZWFyZXInfCdtYWMnO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIFRva2VuUmVzcG9uc2UgYXMgYSBKU09OIE9iamVjdC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUb2tlblJlc3BvbnNlSnNvbiB7XG4gIGFjY2Vzc190b2tlbjogc3RyaW5nO1xuICB0b2tlbl90eXBlPzogVG9rZW5UeXBlOyAvKiB0cmVhdGluZyB0b2tlbiB0eXBlIGFzIG9wdGlvbmFsLCBhcyBpdHMgZ29pbmcgdG8gYmUgaW5mZXJyZWQuICovXG4gIGV4cGlyZXNfaW4/OiBudW1iZXI7ICAgIC8qIGxpZmV0aW1lIGluIHNlY29uZHMuICovXG4gIHJlZnJlc2hfdG9rZW4/OiBzdHJpbmc7XG4gIHNjb3BlPzogc3RyaW5nO1xuICBpZF90b2tlbj86IHN0cmluZzsgIC8qIGh0dHBzOi8vb3BlbmlkLm5ldC9zcGVjcy9vcGVuaWQtY29ubmVjdC1jb3JlLTFfMC5odG1sI1Rva2VuUmVzcG9uc2UgKi9cbiAgaXNzdWVkX2F0PzogbnVtYmVyOyAvKiB3aGVuIHdhcyBpdCBpc3N1ZWQgPyAqL1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIHBvc3NpYmxlIGVycm9yIGNvZGVzIGZyb20gdGhlIHRva2VuIGVuZHBvaW50LlxuICogRm9yIG1vcmUgaW5mb3JtYXRpb24gbG9vayBhdDpcbiAqIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NzQ5I3NlY3Rpb24tNS4yXG4gKi9cbmV4cG9ydCB0eXBlIEVycm9yVHlwZSA9ICdpbnZhbGlkX3JlcXVlc3QnfCdpbnZhbGlkX2NsaWVudCd8J2ludmFsaWRfZ3JhbnQnfCd1bmF1dGhvcml6ZWRfY2xpZW50J3xcbiAgICAndW5zdXBwb3J0ZWRfZ3JhbnRfdHlwZSd8J2ludmFsaWRfc2NvcGUnO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIFRva2VuRXJyb3IgYXMgYSBKU09OIE9iamVjdC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUb2tlbkVycm9ySnNvbiB7XG4gIGVycm9yOiBFcnJvclR5cGU7XG4gIGVycm9yX2Rlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBlcnJvcl91cmk/OiBzdHJpbmc7XG59XG5cbi8vIGNvbnN0YW50c1xuY29uc3QgQVVUSF9FWFBJUllfQlVGRkVSID0gMTAgKiA2MCAqIC0xOyAgLy8gMTAgbWlucyBpbiBzZWNvbmRzXG5cbi8qKlxuICogUmV0dXJucyB0aGUgaW5zdGFudCBvZiB0aW1lIGluIHNlY29uZHMuXG4gKi9cbmV4cG9ydCBjb25zdCBub3dJblNlY29uZHMgPSAoKSA9PiBNYXRoLnJvdW5kKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgVG9rZW4gUmVzcG9uc2UgdHlwZS5cbiAqIEZvciBtb3JlIGluZm9ybWF0aW9uIGxvb2sgYXQ6XG4gKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjc0OSNzZWN0aW9uLTUuMVxuICovXG5leHBvcnQgY2xhc3MgVG9rZW5SZXNwb25zZSB7XG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG4gIHRva2VuVHlwZTogVG9rZW5UeXBlO1xuICBleHBpcmVzSW46IG51bWJlcnx1bmRlZmluZWQ7XG4gIHJlZnJlc2hUb2tlbjogc3RyaW5nfHVuZGVmaW5lZDtcbiAgc2NvcGU6IHN0cmluZ3x1bmRlZmluZWQ7XG4gIGlkVG9rZW46IHN0cmluZ3x1bmRlZmluZWQ7XG4gIGlzc3VlZEF0OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocmVzcG9uc2U6IFRva2VuUmVzcG9uc2VKc29uKSB7XG4gICAgdGhpcy5hY2Nlc3NUb2tlbiA9IHJlc3BvbnNlLmFjY2Vzc190b2tlbjtcbiAgICB0aGlzLnRva2VuVHlwZSA9IHJlc3BvbnNlLnRva2VuX3R5cGUgfHwgJ2JlYXJlcic7XG4gICAgdGhpcy5leHBpcmVzSW4gPSByZXNwb25zZS5leHBpcmVzX2luO1xuICAgIHRoaXMucmVmcmVzaFRva2VuID0gcmVzcG9uc2UucmVmcmVzaF90b2tlbjtcbiAgICB0aGlzLnNjb3BlID0gcmVzcG9uc2Uuc2NvcGU7XG4gICAgdGhpcy5pZFRva2VuID0gcmVzcG9uc2UuaWRfdG9rZW47XG4gICAgdGhpcy5pc3N1ZWRBdCA9IHJlc3BvbnNlLmlzc3VlZF9hdCB8fCBub3dJblNlY29uZHMoKTtcbiAgfVxuXG4gIHRvSnNvbigpOiBUb2tlblJlc3BvbnNlSnNvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjY2Vzc190b2tlbjogdGhpcy5hY2Nlc3NUb2tlbixcbiAgICAgIGlkX3Rva2VuOiB0aGlzLmlkVG9rZW4sXG4gICAgICByZWZyZXNoX3Rva2VuOiB0aGlzLnJlZnJlc2hUb2tlbixcbiAgICAgIHNjb3BlOiB0aGlzLnNjb3BlLFxuICAgICAgdG9rZW5fdHlwZTogdGhpcy50b2tlblR5cGUsXG4gICAgICBpc3N1ZWRfYXQ6IHRoaXMuaXNzdWVkQXQsXG4gICAgICBleHBpcmVzX2luOiB0aGlzLmV4cGlyZXNJblxuICAgIH07XG4gIH1cblxuICBpc1ZhbGlkKGJ1ZmZlcjogbnVtYmVyID0gQVVUSF9FWFBJUllfQlVGRkVSKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZXhwaXJlc0luKSB7XG4gICAgICBsZXQgbm93ID0gbm93SW5TZWNvbmRzKCk7XG4gICAgICByZXR1cm4gbm93IDwgdGhpcy5pc3N1ZWRBdCArIHRoaXMuZXhwaXJlc0luICsgYnVmZmVyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBUb2tlbiBFcnJvciB0eXBlLlxuICogRm9yIG1vcmUgaW5mb3JtYXRpb24gbG9vayBhdDpcbiAqIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NzQ5I3NlY3Rpb24tNS4yXG4gKi9cbmV4cG9ydCBjbGFzcyBUb2tlbkVycm9yIHtcbiAgZXJyb3I6IEVycm9yVHlwZTtcbiAgZXJyb3JEZXNjcmlwdGlvbjogc3RyaW5nfHVuZGVmaW5lZDtcbiAgZXJyb3JVcmk6IHN0cmluZ3x1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IodG9rZW5FcnJvcjogVG9rZW5FcnJvckpzb24pIHtcbiAgICB0aGlzLmVycm9yID0gdG9rZW5FcnJvci5lcnJvcjtcbiAgICB0aGlzLmVycm9yRGVzY3JpcHRpb24gPSB0b2tlbkVycm9yLmVycm9yX2Rlc2NyaXB0aW9uO1xuICAgIHRoaXMuZXJyb3JVcmkgPSB0b2tlbkVycm9yLmVycm9yX3VyaTtcbiAgfVxuXG4gIHRvSnNvbigpOiBUb2tlbkVycm9ySnNvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiB0aGlzLmVycm9yLCBlcnJvcl9kZXNjcmlwdGlvbjogdGhpcy5lcnJvckRlc2NyaXB0aW9uLCBlcnJvcl91cmk6IHRoaXMuZXJyb3JVcmlcbiAgICB9XG4gIH1cbn1cbiJdfQ==